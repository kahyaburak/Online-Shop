const imagePickerElement = document.getElementById('image');
const imagePreviewElement = document.querySelector('#image-upload-control img');

function toggleImagePreview() {
  const files = imagePickerElement.files;

  if (!files || files.length === 0) {
    imagePreviewElement.style.display = 'none';
    return;
  }

  const pickedFile = files[0];

  console.log();

  imagePreviewElement.src = URL.createObjectURL(pickedFile);

  imagePreviewElement.style.display = 'block';
}

imagePickerElement.addEventListener('change', toggleImagePreview);
