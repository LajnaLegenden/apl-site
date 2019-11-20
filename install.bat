rmdir /Q /S dist\\views
mkdir dist/views
xcopy src\\views /A /S dist\\views
node-sass src\\public\\scss\\ -o dist\\public\\css\\
npm start