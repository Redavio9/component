export function rendercontent() 
{

  console.log("contentHome");
  const header = document.getElementById('content');
  header.innerHTML += `
    <div id="content1">
      <h1> hna </h1>
    </div>
  `;
}