cd client
npm install
cd ../
cd functions/
for d in ./*/ ; do (cd "$d" && npm install); done 
