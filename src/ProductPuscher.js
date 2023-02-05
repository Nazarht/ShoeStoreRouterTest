async function pushTheProject() {
  const response = await fetch(
    "https://react-router-c29dd-default-rtdb.firebaseio.com/products.json",
    {
      method: "POST",
      body: JSON.stringify({
        img: 
'https://process.filestackapi.com/AazSisOjUQx2TZJQX0PdNz/resize=height:614,width:900,fit:crop/output=compress:true,quality:60,strip:true/auto_image/cache=expiry:31536000/https://storage.googleapis.com/kt-apiv2-default/3acf94e6-b16d-47bd-ae17-74d55bacb4d8..png',
        name: 
    `Yeezy Boost 350 V2 Beluga Reflective`,
        description:
`Constructed from adidas Primeknit, the adidas Yeezy Boost 350 V2 Beluga Reflective sees one of the Yeezy brand's most enduring and iconic models sporting a Beluga Reflective colourway.`,
        price: 298,
      }),
    }
  );

  const result = await response.json();

  console.log(result);
}

async function loadeTheProject() {
  const response = await fetch(
    'https://react-router-c29dd-default-rtdb.firebaseio.com/products/-NNTd-qys1UbMPU6hsos.json'
  )

  const result = await response.json();

  console.log(result)
}


const sizes = []

for (let i = 6; i < 15; i += 0.5) {
  sizes.push(`US${i}`);
  
}


console.log({'is this legal?': 'Yes'})