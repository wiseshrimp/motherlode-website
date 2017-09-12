const db = require('../db')

const seedText = () => db.Promise.map([
  {
    motherlode: '',
    leah: 'Leah Roh is a New York-based 3D/VR artist who visually examines our sociological relationship with technology. As a strong advocate for gender equality and sex positivity, she stresses her individual experiences as a woman of color in a patriarchal industry through her work, experimenting with various mediums of storytelling to explore the human condition.',
    contact: ''
  }
])

db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedText)
  .then(text => console.log(`Seeded ${text.length} text OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
