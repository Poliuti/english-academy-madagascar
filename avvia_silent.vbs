Dim shell, fso, batPath
Set shell = CreateObject("WScript.Shell")
Set fso   = CreateObject("Scripting.FileSystemObject")
batPath   = fso.GetParentFolderName(WScript.ScriptFullName) & "\avvia.bat"
' 0 = finestra nascosta, False = non aspettare
shell.Run Chr(34) & batPath & Chr(34), 0, False
