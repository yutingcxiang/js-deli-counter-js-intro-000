var katzDeli = [];

function takeANumber(katzDeli, person) {
  katzDeli.push(person);
  return `Welcome, ${person}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else { 
    current = katzDeli.shift(); 
    return `Currently serving ${current}`;
    }
  }
}

function currentLine(katzDeli) {
  
}