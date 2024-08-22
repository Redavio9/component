export function rendercontent() 
{

  console.log("contentHome");
  const header = document.getElementById('content');
  header.innerHTML += `
    <div id="content1" style="background-color: #1aa19f;">
      <h1> hna </h1>
    </div>
  `;
}