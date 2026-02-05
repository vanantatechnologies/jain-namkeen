// src/components/SEO/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, url, image, schema }) => {
        return (
            <Helmet>
                    {/* Basic SEO */}
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords} />
                    <meta name="author" content="Jain Namkin" />
                    <meta name="robots" content="index, follow" />
                    <meta name="theme-color" content="#ffffff" />

                    {/* Open Graph / Facebook */}
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={image} />
                    <meta property="og:url" content={url} />
                    <meta property="og:type" content="website" />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:image" content={image} />

                    {/* Canonical */}
                    <link rel="canonical" href={url} />

                    {/* Favicon & App Icons */}
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#2b5797" />

                    {/* Structured Data */}
                    {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
            </Helmet>
        );
};

export default SEO;
