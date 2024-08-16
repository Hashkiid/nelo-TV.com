document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const filesList = document.getElementById('files-list');

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const files = fileInput.files;
        if (files.length === 0) return;

        Array.from(files).forEach(file => {
            const listItem = document.createElement('li');
            listItem.textContent = file.name;
            filesList.appendChild(listItem);
        });

        alert('Videos uploaded successfully!');
        fileInput.value = '';
    });
});
