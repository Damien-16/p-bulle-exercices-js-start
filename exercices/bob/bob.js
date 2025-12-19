//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
if(message === message.toUpperCase() && /[A-Z]/.test(message) && message.trim()){
  if(Array.from(message)[Array.from(message).length - 1] == '?'){
      return "Calm down, I know what I'm doing!"
    }
    else{
      return "Whoa, chill out!"
    }
}
else if(message.trim().endsWith("?")){
    return "Sure."
  }
  else if(message.trim().length == ""){
    return "Fine. Be that way!"
  }
  else{
    return "Whatever."
  }
};
