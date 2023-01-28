cd client/
call npm install
cd ../
cd functions/
for dir in ~/functions/*;
  do 
     [ -d "$dir" ] && cd "$dir" && call npm install
  done;