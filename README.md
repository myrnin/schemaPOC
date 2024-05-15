# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

# Sanity Project Overview

## Migration from Optimizely CMS to Sanity

### Migration Process

- Overview of the migration process and considerations
- Challenges and solutions encountered

## Content Structure in Sanity

### Content Types and Blocks Overview

- Explanation of different data, content, and object types in Sanity
- High-level structure of content types used in the project

# Sanity Project Overview

## Types in Sanity

### 1. Document

- **Description:** A top-level type that represents a single piece of content in your dataset. Each document type gets its own collection in the database.
- **Example Usage:** `type: 'document'`
- **Use Case:** Used for content types like pages, posts, authors, products, etc.

### 2. Object

- **Description:** A nested structure of fields that can be used within other types. Objects don't have their own collection and are used to define reusable groups of fields.
- **Example Usage:** `type: 'object'`
- **Use Case:** Used for components like address, person details, SEO settings, etc.

### 3. String

- **Description:** A simple text field. This can be used for single-line text inputs.
- **Example Usage:** `type: 'string'`
- **Use Case:** Used for titles, names, labels, and any single-line text content.

### 4. Text

- **Description:** A multi-line text field. This is ideal for longer text inputs.
- **Example Usage:** `type: 'text'`
- **Use Case:** Used for descriptions, biographies, content sections, and other multi-line text inputs.

### 5. Number

- **Description:** A numeric field. This can be used for integers or floating-point numbers.
- **Example Usage:** `type: 'number'`
- **Use Case:** Used for prices, ratings, quantities, and other numerical data.

### 6. Boolean

- **Description:** A true/false field. This is ideal for binary choices.
- **Example Usage:** `type: 'boolean'`
- **Use Case:** Used for flags, toggles, published status, and other binary options.

### 7. Date

- **Description:** A date field. This stores only the date (without time).
- **Example Usage:** `type: 'date'`
- **Use Case:** Used for birthdates, event dates, publication dates, and other date-specific information.

### 8. Datetime

- **Description:** A datetime field. This stores both date and time.
- **Example Usage:** `type: 'datetime'`
- **Use Case:** Used for timestamps, event scheduling, and other date-time related information.

### 9. Url

- **Description:** A URL field. This is used for web links.
- **Example Usage:** `type: 'url'`
- **Use Case:** Used for external links, references to other web pages, and social media links.

### 10. Image

- **Description:** An image field. This stores images and supports options like hotspot and cropping.
- **Example Usage:** `type: 'image'`
- **Use Case:** Used for profile pictures, banners, gallery images, and other visual content.

### 11. File

- **Description:** A file field. This stores files like PDFs, Word documents, etc.
- **Example Usage:** `type: 'file'`
- **Use Case:** Used for downloadable content, attachments, and other file-based content.

### 12. Geopoint

- **Description:** A geographical point field. This stores latitude and longitude coordinates.
- **Example Usage:** `type: 'geopoint'`
- **Use Case:** Used for locations, mapping coordinates, and geographical data.

### 13. Reference

- **Description:** A reference field. This creates a relationship between documents by referencing another document.
- **Example Usage:** `type: 'reference'`
- **Use Case:** Used for author references, category assignments, and other relational content.

### 14. Slug

- **Description:** A slug field. This generates URL-friendly strings based on another field.
- **Example Usage:** `type: 'slug'`
- **Use Case:** Used for generating URLs, creating slugs for pages and posts.

### 15. Array

- **Description:** A field for an array of items. The items can be of any type.
- **Example Usage:** `type: 'array'`
- **Use Case:** Used for lists of items, such as tags, images, and blocks of content.

### 16. Block

- **Description:** A field for rich text content. It supports various text formatting options and can include inline objects.
- **Example Usage:** `type: 'block'`
- **Use Case:** Used for article content, descriptions, and any rich text content.

## Detailed Breakdown of Content Blocks and Highlighted Types

1. **Navigation Header Block:**

   - **Logo (Image)**
   - **Tabs (Array of Objects):**
     - **Tab Name (String)**
     - **URL (Url)**

2. **Rich Text Block:**

   - **Content (Array of Block)**
   - **Author (Reference to Author document)**

3. **Media Block:**

   - **Media Title (String)**
   - **File Reference (Reference to File Object document)**
   - **Featured (Boolean)**
   - **Rating (Number)**

4. **Quote Block:**

   - **Quote (Text)**
   - **Date (Date)**

5. **Call to Action Block:**

   - **CTA Text (String)**
   - **CTA URL (Url)**
   - **CTA Slug (Slug)**

6. **Map Block:**

   - **Location (Geopoint)**
   - **Map Title (String)**
   - **Map Style (String, Dropdown)**

7. **Footer Block:**

   - **Disclaimer (String)**
   - **Social Links (Array of Url)**

8. **Author Schema (Referenced by Rich Text Block):**

   - **Name (String)**
   - **Bio (Text)**
   - **Image (Image)**

9. **File Object Schema (Standalone Document):**
   - **Title (String)**
   - **File (File)**
   - **Description (Text)**

## Demo of Content Blocks

### Live Demo in Sanity Studio

- Show how to create and manage content using the defined blocks
- Highlight real-time collaboration and editing features

### Integration with Frontend (Next.js)

- Demonstrate how content from Sanity is fetched and rendered in a Next.js frontend
- Highlight seamless integration and real-time updates

## Technical Deep Dive for Developers

### Schema Definitions and Configuration

- Detailed explanation of schema files and their configurations
- How to define and link schemas in Sanity

### Querying and Fetching Content

- Overview of GraphQL for querying Sanity content
- Examples of fetching content for different blocks

### Deployment and Hosting

- Overview of deploying Sanity Studio and the frontend (e.g., using Vercel)
- Best practices for hosting and maintaining the Sanity project

## Q&A Session

- Open the floor for questions from both business analysts and developers
- Address any specific concerns or clarifications needed

## Conclusion

- Summarize the key points discussed
- Reiterate the benefits and potential of using Sanity for the organization's content management needs
- Next steps and actions post-presentation

--

### Future Possibilities

- Show how to create and manage content using the defined blocks
- Highlight real-time collaboration and editing features

### Integration with Frontend (Next.js)

- Demonstrate how content from Sanity is fetched and rendered in a Next.js frontend
- Highlight seamless integration and real-time updates

## Technical Deep Dive for Developers

### Schema Definitions and Configuration

- Detailed explanation of schema files and their configurations
- How to define and link schemas in Sanity

### Querying and Fetching Content

- Overview of GROQ (Graph-Relational Object Queries) for querying Sanity content
- Examples of fetching content for different blocks

### Deployment and Hosting

- Overview of deploying Sanity Studio and the frontend (e.g., using Vercel)
- Best practices for hosting and maintaining the Sanity project

## Q&A Session

- Open the floor for questions from both business analysts and developers
- Address any specific concerns or clarifications needed

## Conclusion

- Summarize the key points discussed
- Reiterate the benefits and potential of using Sanity for the organization's content management needs
- Next steps and actions post-presentation
