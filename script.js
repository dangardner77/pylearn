let pyodide = null;

async function loadPyodideAndPackages() {
    pyodide = await loadPyodide();
    console.log("Pyodide loaded.");
}

loadPyodideAndPackages();

async function runCode() {
    let code = document.getElementById("editor").value;
    try {
        let output = await pyodide.runPythonAsync(code);
        document.getElementById("output").innerText = output;
    } catch (error) {
        document.getElementById("output").innerText = error;
    }
}
