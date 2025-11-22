// ============================================
// LORE ARCHIVE DATA
// ============================================
const loreData = [
  { title: 'The First Floating Sanctuary', tag: 'unicorn', desc: 'The tale of how the eldest Unicorn raised the first crystalline palace from thought alone, establishing the floating kingdoms.' },
  { title: 'Pegasus and the Star Winds', tag: 'pegasus', desc: 'The discovery of the infinite currents—pathways of pure magic through which Pegasi learned to soar beyond the clouds.' },
  { title: 'The Dragon\'s Descent', tag: 'dragon', desc: 'When the first Dragon dove into the world\'s depths and found the core of fire, awakening the primal elements.' },
  { title: 'The Pact of Three', tag: 'unicorn', desc: 'The ancient accord forged when Unicorn wisdom united with Pegasus connection and Dragon power.' },
  { title: 'Memory Weavers of Old', tag: 'unicorn', desc: 'The order of Unicorns dedicated to preserving all knowledge in crystalline archives of pure thought.' },
  { title: 'Wings of Silver Light', tag: 'pegasus', desc: 'A chronicle of the greatest Pegasi runners who carried the most important messages across the cosmos.' },
  { title: 'Guardians of the Core', tag: 'dragon', desc: 'The sacred duty of Dragons to maintain the balance between fire, water, earth, and sky.' },
  { title: 'The Triune Conclave', tag: 'dragon', desc: 'Where the three Orders gathered in the most sacred place, their decisions written as stars for eternity.' },
  { title: 'Glyphs of Creation', tag: 'pegasus', desc: 'The magical scripts carried by Pegasi, each one a story that became manifest reality upon arrival.' },
  { title: 'The Eternal Oath', tag: 'unicorn', desc: 'A binding promise spoken in thoughts rather than words, uniting all creatures in purpose and harmony.' }
];

const mysticalFragments = [
  'In the beginning was Light, and the Light was Thought, and Thought was All.',
  'Unicorn horns wrote wisdom in the sky; Pegasus wings carried it on the wind; Dragon breath gave it life.',
  'What is time to those who live in the eternal now?',
  'The stars remember what was decided in the Conclave.',
  'Every heartbeat of a Dragon is a song that shapes the world.',
  'Pegasi do not fly through air—they swim through the substance of magic itself.',
  'The Unicorns did not rule; they guided. Wisdom needs no throne.',
  'Before the first sunset, the three Orders had already written a thousand futures in starlight.'
];

// ============================================
// LORE FILTERING
// ============================================
function initLoreGrid() {
  const grid = document.getElementById('loreGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  loreData.forEach(lore => {
    const card = document.createElement('div');
    card.className = 'lore-card';
    card.innerHTML = `
      <span class="lore-tag">${lore.tag.charAt(0).toUpperCase() + lore.tag.slice(1)}</span>
      <h4>${lore.title}</h4>
      <p class="lore-description">${lore.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function filterLore(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.lore-card');
  cards.forEach(card => {
    const tag = card.querySelector('.lore-tag').textContent.toLowerCase();
    if (category === 'all' || tag === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function randomLore() {
  const randomFragment = mysticalFragments[Math.floor(Math.random() * mysticalFragments.length)];
  alert(`✨ Random Lore Fragment ✨\n\n"${randomFragment}"`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initLoreGrid();
});