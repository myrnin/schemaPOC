import React, {useState, useEffect} from 'react'
import './GridEditor.css'

const getTrianglePath = (orientation) => {
  switch (orientation) {
    case 'rotate90':
      return 'M50 0 L50 50 L0 0 Z' // Triangle rotated 90 degrees
    case 'rotate180':
      return 'M50 50 L0 50 L50 0 Z' // Triangle rotated 180 degrees
    case 'rotate270':
      return 'M0 50 L50 50 L0 0 Z' // Triangle rotated 270 degrees
    default:
      return 'M0 0 L50 0 L0 50 Z' // Default orientation (0 degrees)
  }
}

const getTransformOrigin = (orientation, animation) => {
  switch (`${orientation} - ${animation}`) {
    case 'rotate90 - scaleY':
      return 'top center'
    case 'rotate90 - scaleX':
      return 'right center'
    case 'rotate180 - scaleY':
      return 'bottom center'
    case 'rotate180 - scaleX':
      return 'right center'
    case 'rotate270 - scaleY':
      return 'bottom center'
    case 'rotate270 - scaleX':
      return 'left center'
    case 'default - scaleY':
      return 'top center'
    case 'default - scaleX':
      return 'left center'
    default:
      return ''
  }
}

const SVGGrid = () => {
  const [rows, setRows] = useState(10)
  const [cols, setCols] = useState(10)
  const [grid, setGrid] = useState(JSON.parse(localStorage.getItem('grid')) || [])
  const [currentShare, setCurrentShare] = useState(null)
  const [modalData, setModalData] = useState({
    color: '#ccc',
    opacity: 1,
    orientation: 'default',
    animation: 'none',
    duration: '2s',
    delay: '0s',
    row: null,
    col: null,
    shareIndex: 0,
  })
  const [activeTab, setActiveTab] = useState(0)

  const saveGrid = (savedGrid) => {
    setGrid(savedGrid)
    localStorage.setItem('grid', JSON.stringify(savedGrid))
  }

  const initializeGrid = () => {
    const savedGrid = JSON.parse(localStorage.getItem('grid')) || []
    if (savedGrid.length) {
      saveGrid(savedGrid)
    } else {
      const newGrid = Array.from({length: rows}, () =>
        Array.from({length: cols}, () => [null, null]),
      )
      saveGrid(newGrid)
    }
  }

  useEffect(initializeGrid, [])

  const generateGrid = () => {
    initializeGrid()
  }

  const resetGrid = () => {
    saveGrid([])
    localStorage.removeItem('grid')
    initializeGrid()
  }

  const openModal = (row, col, shareIndex = 0) => {
    const share = grid[row][col][shareIndex]
    if (share) {
      setModalData({...share, row, col, shareIndex})
    } else {
      setModalData({
        color: '#ccc',
        opacity: 1,
        orientation: 'default',
        animation: 'none',
        duration: '2s',
        delay: '0s',
        row,
        col,
        shareIndex,
      })
    }
    setCurrentShare({row, col, shareIndex})
    setActiveTab(shareIndex)
    document.getElementById('modal').classList.add('active')
    document.getElementById('modalOverlay').classList.add('active')
  }

  const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
    document.getElementById('modalOverlay').classList.remove('active')
    setCurrentShare(null)
  }

  const applyChanges = () => {
    const {row, col, shareIndex, ...shareData} = modalData
    const newGrid = [...grid]
    newGrid[row][col][shareIndex] = {...shareData, row, col}
    saveGrid(newGrid)
    closeModal()
  }

  const handleModalChange = (e) => {
    const {name, value} = e.target
    setModalData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const removeShare = () => {
    const {row, col, shareIndex} = modalData
    const newGrid = [...grid]
    newGrid[row][col][shareIndex] = null
    saveGrid(newGrid)
    closeModal()
  }

  useEffect(() => {
    if (currentShare) {
      const {row, col} = currentShare
      const share = grid[row]?.[col]?.[activeTab]
      if (share) {
        setModalData({...share, row, col, shareIndex: activeTab})
      } else {
        setModalData({
          color: '#ccc',
          opacity: 1,
          orientation: 'default',
          animation: 'none',
          duration: '2s',
          delay: '0s',
          row,
          col,
          shareIndex: activeTab,
        })
      }
    }
  }, [activeTab])

  const renderTabs = () => (
    <div className="tabs">
      {grid[modalData.row]?.[modalData.col]?.map((share, index) => (
        <button
          key={index}
          className={activeTab === index ? 'active' : ''}
          onClick={() => setActiveTab(index)}
        >
          Share {index + 1}
        </button>
      ))}
    </div>
  )

  return (
    <div>
      <div>
        <label htmlFor="rows">Rows:</label>
        <input
          type="number"
          id="rows"
          value={rows}
          onChange={(e) => setRows(parseInt(e.target.value))}
        />
        <label htmlFor="cols">Columns:</label>
        <input
          type="number"
          id="cols"
          value={cols}
          onChange={(e) => setCols(parseInt(e.target.value))}
        />
        <button onClick={generateGrid}>Generate Grid</button>
        <button onClick={resetGrid}>Reset Grid</button>
      </div>
      <div
        className="svg-container"
        id="svgContainer"
        style={{gridTemplateColumns: `repeat(${cols}, 50px)`}}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="svg-item"
              onClick={() => openModal(rowIndex, colIndex)}
              style={{
                gridRowStart: rowIndex + 1,
                gridColumnStart: colIndex + 1,
              }}
            >
              {cell.map(
                (share, shareIndex) =>
                  share && (
                    <svg
                      key={shareIndex}
                      viewBox="0 0 50 50"
                      className="animated"
                      style={{
                        animation: `${share.animation} ${share.duration} ${share.delay} forwards`,
                        transformOrigin: getTransformOrigin(share.orientation, share.animation),
                        '--final-opacity': share.opacity,
                        opacity: 0,
                        position: 'absolute',
                      }}
                    >
                      <path d={getTrianglePath(share.orientation)} fill={share.color} />
                    </svg>
                  ),
              )}
            </div>
          )),
        )}
      </div>

      <div className="modal-overlay" id="modalOverlay"></div>
      <div className="modal" id="modal">
        {renderTabs()}
        <div>
          <label htmlFor="shareColor">Share Color:</label>
          <input
            type="color"
            id="shareColor"
            name="color"
            value={modalData.color}
            onChange={handleModalChange}
          />
        </div>
        <div>
          <label htmlFor="shareOpacity">Share Opacity:</label>
          <input
            type="number"
            id="shareOpacity"
            name="opacity"
            step="0.1"
            min="0"
            max="1"
            value={modalData.opacity}
            onChange={handleModalChange}
          />
        </div>
        <div>
          <label htmlFor="shareOrientation">Share Orientation:</label>
          <select
            id="shareOrientation"
            name="orientation"
            value={modalData.orientation}
            onChange={handleModalChange}
          >
            <option value="default">Default</option>
            <option value="rotate90">Rotate 90°</option>
            <option value="rotate180">Rotate 180°</option>
            <option value="rotate270">Rotate 270°</option>
          </select>
        </div>
        <div>
          <label htmlFor="shareAnimation">Share Animation:</label>
          <select
            id="shareAnimation"
            name="animation"
            value={modalData.animation}
            onChange={handleModalChange}
          >
            <option value="none">None</option>
            <option value="scaleY">Scale Y</option>
            <option value="scaleX">Scale X</option>
            <option value="skewY">Skew Y</option>
            <option value="skewX">Skew X</option>
          </select>
        </div>
        <div>
          <label htmlFor="animationDuration">Animation Duration:</label>
          <input
            type="text"
            id="animationDuration"
            name="duration"
            value={modalData.duration}
            onChange={handleModalChange}
          />
        </div>
        <div>
          <label htmlFor="animationDelay">Animation Delay:</label>
          <input
            type="text"
            id="animationDelay"
            name="delay"
            value={modalData.delay}
            onChange={handleModalChange}
          />
        </div>
        <button onClick={applyChanges}>Apply Changes</button>
        <button onClick={removeShare}>Remove Share</button>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  )
}

export default SVGGrid
