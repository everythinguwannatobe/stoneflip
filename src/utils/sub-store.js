const randomEuler = () => [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
const data = Array.from({ length: 10 }, (r = 20) => ({random: Math.random(), rotation: randomEuler() }))

export { data };