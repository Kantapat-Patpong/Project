function generateChar() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return chars[Math.floor(Math.random() * chars.length)];
  }
  
  export default generateChar;