const WEDDING = new Date('2026-05-02T09:00:00');
const DEADLINE = new Date('2026-04-15T23:59:59');

function updateCountdown() {
  const now = new Date();
  const diff = WEDDING - now;
  if (diff <= 0) return;
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  const items = [
    { val: d, label: 'дана' },
    { val: h, label: 'сати' },
    { val: m, label: 'минута' },
    { val: s, label: 'секунди' },
  ];
  document.getElementById('countdown').innerHTML = items.map(i => `
    <div class="countdown-item">
      <div class="countdown-value">${i.val}</div>
      <div class="countdown-label">${i.label}</div>
    </div>
  `).join('');
}
updateCountdown();
setInterval(updateCountdown, 1000);

function updateDeadline() {
  const daysLeft = Math.max(0, Math.ceil((DEADLINE - new Date()) / (1000*60*60*24)));
  document.getElementById('rsvp-deadline').textContent = `Остало је још ${daysLeft} дана за потврду.`;
}
updateDeadline();

const ICONS = {
  glass:  "assets/icon-glass.svg",
  cheers: "assets/icon-cheers.svg",
  rings:  "assets/icon-rings.svg",
  church: "assets/icon-church.svg",
  cake:   "assets/icon-cake.svg",
};

const events = [
  { icon: 'glass', title: 'Окупљање сватова <br> породица Недељковић', location: 'Гаврила Принципа 44', address: '', time: '09:00h', map: 'Gavrila Principa 44, Krusevac' },
  { icon: 'cheers', title: 'Окупљање сватова <br> породица Јаћовић', location: 'Макрешане', address: '', time: '10:00h', map: 'Makresane, Serbia' },
  { icon: 'rings', title: 'Грађанско венчање', location: 'Трг Косовских јунака 1', address: 'Крушевац', time: '13:00h', map: 'Trg Kosovskih junaka 1, Krusevac' },
  { icon: 'church', title: 'Црквено венчање', location: 'Црква Светог Ђорђа', address: 'Доситејева 1, Крушевац', time: '13:30h', map: 'Crkva Svetog Djordja, Dositejeva 1, Krusevac' },
  { icon: 'cake', title: 'Свечана прослава', location: 'Ресторан Лазарев двор', address: 'Илије Гарашанина 8А, Крушевац', time: '16:00h', map: 'Restoran Lazarev dvor, Ilije Garasanina 8A, Krusevac' },
];

document.getElementById('events').innerHTML = events.map(e => `
  <div class="event-card">
    <div class="event-icon"><img src="${ICONS[e.icon]}" alt=""></div>
    <h3 class="event-title">${e.title}</h3>
    <p class="event-location">${e.location}</p>
    ${e.address ? `<p class="event-address">${e.address}</p>` : ''}
    <a class="event-map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.map)}" target="_blank">Погледај на мапи</a>
    <div class="event-time">${e.time}</div>
  </div>
`).join('');
