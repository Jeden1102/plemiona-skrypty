function getElementsByText(str, tag = 'a') {
    return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
  }

var arr = getElementsByText('Cofnij');

arr.forEach(myFunction);
setTimeout(myFunction,100);
function myFunction(item, index) {
  arr[index].target = "_blank";
    console.log(item);
    item.click();
    
}