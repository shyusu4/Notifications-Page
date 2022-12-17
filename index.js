const notifsCounter = document.getElementById('notifs-counter');
const markAll = document.getElementById('mark-all');

function toggleBadges() {
  const dots = document.getElementsByClassName('dot');
  for (const dot of dots) {
    if (dot.style.display === 'none') {
      dot.style.display = 'inline-block';
      notifsCounter.textContent = '3';
    } else {
      dot.style.display = 'none';
      notifsCounter.textContent = '0';
    }
  }
}
