const modal = document.getElementById("eventModal");
const eventBody = document.getElementById("eventBody");
let editIndex = null;

// Open Add Modal
function openAddModal() {
  document.getElementById("modalTitle").innerText = "Add Event";
  document.getElementById("eventName").value = "";
  document.getElementById("eventDate").value = "";
  document.getElementById("eventLocation").value = "";
  editIndex = null;
  modal.style.display = "flex";
}

// Open Edit Modal
function openEditModal(btn) {
  const row = btn.closest("tr");
  editIndex = row.rowIndex - 1;

  document.getElementById("modalTitle").innerText = "Update Event";
  document.getElementById("eventName").value = row.cells[1].innerText;
  document.getElementById("eventDate").value = row.cells[2].innerText;
  document.getElementById("eventLocation").value = row.cells[3].innerText;

  modal.style.display = "flex";
}

// Close Modal
function closeModal() {
  modal.style.display = "none";
}

// Save (Add or Update)
function saveEvent() {
  const name = document.getElementById("eventName").value.trim();
  const date = document.getElementById("eventDate").value.trim();
  const location = document.getElementById("eventLocation").value.trim();

  if (!name || !date || !location) {
    alert("Please fill all fields!");
    return;
  }

  if (editIndex === null) {
    // Add new event
    const row = eventBody.insertRow();
    const id = eventBody.rows.length;
    row.innerHTML = `
      <td>${id}</td>
      <td>${name}</td>
      <td>${date}</td>
      <td>${location}</td>
      <td>
        <button class="update-btn" onclick="openEditModal(this)">Update</button>
        <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
      </td>`;
  } else {
    // Update existing row
    const row = eventBody.rows[editIndex];
    row.cells[1].innerText = name;
    row.cells[2].innerText = date;
    row.cells[3].innerText = location;
  }

  closeModal();
}

// Delete Row
function deleteRow(btn) {
  if (confirm("Are you sure you want to delete this event?")) {
    const row = btn.closest("tr");
    row.remove();
    // Reorder IDs
    Array.from(eventBody.rows).forEach((r, i) => r.cells[0].innerText = i + 1);
  }
}

// Close modal if clicked outside
window.onclick = function(e) {
  if (e.target === modal) {
    closeModal();
  }
};
