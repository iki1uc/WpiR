<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>WµR – Eintritt + Markierung</title>
    <style>
        body { background:#111; color:#0f0; font-family: monospace; padding:20px; }
        h1 { color:#0f0; }
        pre { background:#000; padding:10px; border:1px solid #0f0; }
    </style>
</head>
<body>

<h1>WµR – Eintritt + Markierung</h1>
<p>Direkte WµR-Demo für RAWATOR.</p>

<pre id="out">Lade…</pre>

<script type="module">
    import { WµR } from "./WµR.js";

    const out = document.getElementById("out");

    function runWµR(role, text) {
        const pxOut = { role, text };
        const result = WµR.run(pxOut);

        out.innerText += 
            "INPUT:\n" +
            "  Rolle: " + role + "\n" +
            "  Text:  " + text + "\n\n" +
            "WµR OUTPUT:\n" +
            JSON.stringify(result, null, 2) +
            "\n\n----------------------\n\n";
    }

    runWµR(1, "Neuer Sprecher tritt ein.");
    runWµR(2, "Impuls erkannt, Eintritt markiert.");
</script>

</body>
</html>
