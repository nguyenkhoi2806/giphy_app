import Resizer from 'react-image-file-resizer';

export const ResizeImage =  (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 300, 300, 'JPEG', 100, 0,
    uri => {
        console.log(uri)
      resolve(uri);
    },
    'base64'
    );
});
