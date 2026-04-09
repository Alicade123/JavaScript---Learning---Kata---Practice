function dup(s) {
  let results = [];
  for (let i = 0; i < s.length; i++) {
    let word = "";
    for (let j = 0; j < s[i].length; j++) {
      if (s[i][j] == s[i][j + 1]) continue;
      else word += s[i][j];
    }
    results.push(word);
  }
  return results;
}

console.log(
  dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])
); //,['codewars','picaniny','hubububo']);
console.log(dup(["abracadabra", "allottee", "assessee"])); //,['abracadabra','alote','asese']);
console.log(dup(["kelless", "keenness"])); //, ['keles','kenes']);
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"])); //, ['Wolomolo','flodoromonlighters','chuchchi']);
console.log(dup(["adanac", "soonness", "toolless", "ppellee"])); //, ['adanac','sones','toles','pele']);
console.log(dup(["callalloo", "feelless", "heelless"])); //, ['calalo','feles','heles']);
console.log(dup(["putteellinen", "keenness"])); //, ['putelinen','kenes']);
console.log(dup(["kelless", "voorraaddoosspullen", "achcha"])); //, ['keles','voradospulen','achcha']);
