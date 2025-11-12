// ==== PARTICIPANTS PAGE LOGIC ====

// Sample JSON data (simulate database)
const participantsData = {
  1: [
    { name: "Aarav Patel", email: "aarav@gmail.com", date: "2025-11-01" },
    { name: "Sneha Rao", email: "sneha@gmail.com", date: "2025-11-02" },
    { name: "Rohit Sharma", email: "rohit@gmail.com", date: "2025-11-03" }
  ],
  2: [
    { name: "Priya Singh", email: "priya@gmail.com", date: "2025-12-01" },
    { name: "Rahul Mehta", email: "rahul@gmail.com", date: "2025-12-02" }
  ]
};

// Get eventId from URL
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get("eventId");

const participantsBody = document.getElementById("participantsBody");
const participants = participantsData[eventId];

// Fill the table
if (!participants || participants.length === 0) {
  participantsBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">No participants found</td></tr>`;
} else {
  participants.forEach((p, i) => {
    const row = `<tr>
      <td>${i + 1}</td>
      <td>${p.name}</td>
      <td>${p.email}</td>
      <td>${p.date}</td>
    </tr>`;
    participantsBody.innerHTML += row;
  });
}

// Back button function
function goBack() {
  window.location.href = "dashboard.html";
}
