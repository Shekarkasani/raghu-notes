const API_URL = 'https://your-backend-url.onrender.com/api/notes';

document.getElementById('noteForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content })
  });

  const newNote = await res.json();
  addNoteToPage(newNote);
  document.getElementById('noteForm').reset();
});

function addNoteToPage(note) {
  const div = document.createElement('div');
  div.className = 'note';
  div.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p><button onclick="deleteNote('${note._id}')">Delete</button>`;
  document.getElementById('notesList').appendChild(div);
}

async function deleteNote(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  loadNotes();
}

async function loadNotes() {
  const res = await fetch(API_URL);
  const notes = await res.json();
  document.getElementById('notesList').innerHTML = '';
  notes.forEach(addNoteToPage);
}

loadNotes();
