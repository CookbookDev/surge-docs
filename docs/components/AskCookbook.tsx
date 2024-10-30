///** It's a public API key, so it's safe to expose it here */
const COOKBOOK_PUBLIC_API_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzIyN2VjMTE0NTFkOTk4MzVjZDllYmYiLCJpYXQiOjE3MzAzMTM5MjEsImV4cCI6MjA0NTg4OTkyMX0.Mwkjp1Efr7qWO1ax464RqTY2g1m_qf_XeNrlH1WJysQ';
export default function AskCookbook() {
    return (
        <>
            <div id="__cookbook" data-api-key={COOKBOOK_PUBLIC_API_KEY}></div>
            <script
                src="https://cdn.jsdelivr.net/npm/@cookbookdev/docsbot/dist/standalone/index.cjs.js"
                defer
            ></script>
        </>
    );
}