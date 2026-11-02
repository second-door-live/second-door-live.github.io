document.addEventListener('submit', event => {
  event.preventDefault();
  let note = document.getElementById('snapshot-note');
  if (!note) {
    note = document.createElement('p');
    note.id = 'snapshot-note';
    note.setAttribute('role', 'status');
    note.className = 'flash';
    note.style.cssText = 'position:fixed;left:1rem;right:1rem;bottom:1rem;margin:0 auto;max-width:32rem;text-align:center;box-shadow:0 4px 20px #0006;';
    document.body.append(note);
  }
  note.textContent = 'This is a snapshot of the demo, so nothing saves here.';
  clearTimeout(note.timer);
  note.timer = setTimeout(() => note.remove(), 4000);
});
