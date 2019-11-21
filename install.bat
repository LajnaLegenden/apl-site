rmdir /Q /S dist\\views
mkdir dist/views
xcopy src\\views /A /S dist\\views
node-sass src\\public\\ -o dist\\public\\
npm start