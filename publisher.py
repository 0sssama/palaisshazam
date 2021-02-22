"""

Scuffed program to help me publish new updates
quickly and easily because I'm too lazy to run
a  billion  commands  just  to  fix  a  stupid
fucking typo.

Please excuse the rudeness and ugliness of
this program. What matters is that it does its
job right :p.

"""
import os
import time
def Log(text):
    print("[PUBLISHER] ->", text)
print("")

Log("Building current React client...")
os.system("cd palais-shazam-client && npm run build")
Log("Build finished successfully.")

print("")
print("")

Log("Deleting old build...")
os.system("rmdir /S build || rm -rf build")
time.sleep(0.1)
Log("Old build deleted successfully.")

print("")
print("")

Log("Copying new build.")
os.system("Xcopy /E /I palais-shazam-client\\build build || cp -r palais-shazam-client/build .")
Log("Build copied successfully")

print("")
print("")

Log("Running 'git add .'...")
os.system("git add .")
Log("DLogone.")

print("")
print("")

Log("Running 'git commit -m '..''")
commitMessage = input('[PUBLISHER] -> What is your commit message ? \n  > ')
commitCMD = "git commit -m \""+commitMessage+"\""
os.system(commitCMD)


print("")
print("")

Log ("Now pushing...")
time.sleep(0.5)
os.system("git push")

print("")
print("")

Log("Pushed successfully... GG!")