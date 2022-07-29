import React, { useEffect } from 'react';
import { NavLink,Link } from 'react-router-dom';
import Categories from '../Categories';
// { name: 'Bedroom' },
// { name: 'Family Room' },
// { name: 'Dining Room' },
// { name: 'Kitchen' },
// { name: 'Bathroom' },
// { name: 'Backyard' }
// import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS} from '../../utils/queries';
const data = [
  {
    name: 'Wall Frame',
    description:
      '24 frames set. Design a complete memory space, always keep the goodliness. Make memories lasting a lifetime with multi picture frames. Simple Picture Frames Set Easy-to-Hang.',
    image: 'wall-frame-bedroom.jpg',
    price: 28.99,
    quantity: 100,
    type: "Family Room"
  },
  {
    name: 'Painting',
    description:
      'Japanese Mountain Landscape Abstract Wall Art carefully handcrafted to bring unique style into your home. Change the entire feel of any space and make an interesting statement with this abstract canvas print.',
    image: 'wall-painting-bedroom.jpg',
    price: 59.99,
    quantity: 100,
    type: "Family Room"
  },
  {
    name: 'Bedding Set',
    description:
      'Thumbedding Peach Bedding Set King Artistic Sweet Soft Girls Duvet Cover Queen Cute Full Twin Single Unique Design Bed Set.',
    image: 'bedding-set-bedroom.jpg',
    price:199.99,
    quantity: 60,
    type: "Bedroom"
  },
  {
    name: 'Bed lamp',
    description:
      'The bedside table lamp with a Cylinder fabric shade and black base, easy to use and install. It’s a beautiful decoration to your home,good gift for your friends.Simple design table lamps use a E26 Bulbs.',
    image: 'bedlamp-bedroom.jpg',
    price: 99.99,
    quantity: 50,
    type: "Bedroom"
  },
  {
    name: 'Night Table',
    description:
      'Decorate your mid-century living room with Harper side table. The space-saving design and neutral colors will blend well with any furniture. Easy glide two-tier drawers provide storage for gadget',
    image: 'night-table-bedroom.jpg',
    price: 259.99,
    quantity: 50,
    type: "Bedroom"
  },
  {
    name: 'Floor Lamp',
    description:
      'Floor lamp with 3 shelves for storage/display. Linen shade casts soft. Warm glow. Assembly required. Lamp measures: l:10.2" X w:10.2" X h:63.3"',
    image: 'floor-lamp-familyroom.jpg',
    price: 299.99,
    quantity: 39,
    type: "Family Room"
  },
  {
    name: 'Persian Rug',
    description:
      'Silk rug has been considered as a luxurious rug.Persian silk rugs are the most intricate, and often most valuable, of all hand-knotted rugs.',
    image: 'persian-rug-fr.jpg',
    price: 199.99,
    quantity: 30,
    type: "Family Room"
  },
  {
    name: 'Ottoman',
    description:
      'Add a dash of glamour to any space with this luxuriously soft velvet ottoman. The contemporary, minimal design allows it to be functional in small spaces or be used as functional seating in a dressing room or for a makeup vanity. ',
    image: 'ottoman-fr.jpg',
    price: 69.99,
    quantity: 56,
    type: "Family Room"
  },
  {
    name: 'Candles',
    description: 'Metal wire pillar candle holder set includes 2 glass votive candle holders with L and S size. Set of 2 candle stands for indoor and outdoor. Adorn your dining table, coffee tabletop, mantel, window, shelves or kitchen with these cute Christmas candlestick holders.',
    image: 'candles-fr.jpg',
    price: 6.99,
    quantity: 200,
    type: "Backyard"
  },
  {
    name: 'Artificial Plant',
    description:
      '32 large palm leaves adorn this masterpiece. Spruce up any space with lovely palm. Sits in a delightful wicker basket; Pot Size 10w x 9h ; dimensions - 142.24 H x 76.2 D x 81.28 W. Product is 4 - 4.5ft tall when measured from floor to fully extended top leaf; re-shape when removed from box',
    image: 'artifical-plant-fr.jpg',
    price: 59.99,
    quantity: 89,
    type: "Family Room"
  },
  {
    name: 'Dining Chairs',
    description:
      'Set of 2 cushioned dining chairs with button tufted upholstery',
    image: 'dining-chairs-dr.jpg',
    price: 297.99,
    quantity: 58,
    type: "Dining Room"
  },
  {
    name: 'Wall Decal',
    description:
      'We have up to 18 colors in MATTE finish to choose. If you have any specicial request please feel free to contact us. Generally we offer 2-4 sizes to choose,and please be aware the size is measured by "INCH".',
    image: 'wall-decal-dr.jpg',
    price: 79.99,
    quantity: 23,
    type: "Dining Room"
  },
  {
    name: 'Cutlery Set',
    description:
      'Package Inclueded: This flatware set includes dinner forks x 6, teaspoons x 6,dinnie spoons x 6, and dinnie knives x 6, Dishwasher Safe.',
    image: 'cutlery-set-dr.jpg',
    price: 39.99,
    quantity: 90,
    type: "Dining Room"
  },
  {
    name: 'Dinner set',
    description:
      '18-piece dinnerware collection with settings for 6 people. Includes 6 each: 11 inch dinner plates, 8 inch salad plates, and 7 inch bowl. Made of durable stoneware for reliable everyday use. Dishwasher, freezer, and microwave-safe; can withstand heat up to 572 degrees',
    image: 'dinner-setr-dr.jpg',
    price: 99.99,
    quantity: 87,
    type: "Dining Room"
  },
  {
    name: 'Table Runner',
    description:
      'If you are looking for an old-fashioned, elaborate and elegant look table runner, this might be just what you are looking for!!! It is a lovely GOLD color, with burgundy embroidered centerpieces. This is machine made lace, with cutouts and is delicate and truly beautiful. This runner washes well. It does not shrink and its stitching holds in place. In fact, washing adds a bit of grace to it',
    image: 'table-runner.jpg',
    price: 14.99,
    quantity: 120,
    type: "Dining Room"
  },
  {
    name: 'Serving cart',
    description:
      'Nothing says sophistication and Class like a great bar cart to serve drinks and snacks with, and the one you choose to place in your home should reflect your personality and style. We hear you. Entertain in style at your next gathering with our Firs Time & Co. Francesca bar cart. This glamorous Gold wheeled cart is graced with two natural wood shelves, racks that can hold up to 6 wine glasses, 5 compartments for wine bottle storage, and room for ALL the essentials.',
    image: 'serving-cart.jpg',
    price: 149.99,
    quantity: 90,
    type: "Kitchen"
  },
  {
    name: 'Chopping Board',
    description:
      'Every kitchen can use a set of 4 wood cutting boards with varied sizing to keep things tidy at all times, whether it’s chopping a small scallion or a full bird with running liquid. This bamboo cutting board set is a sturdy one. They’re natural and free of formaldehyde or coloring. Another bamboo benefit: the large and small chopping boards won’t get saturated from wet foods or catch stains quickly.',
    image: 'chopping-board-k.jpg',
    price: 29.99,
    quantity: 77,
    type: "Kitchen"
  },
  {
    name: 'Knife set',
    description:
      'High-quality Knife Set - Razor-sharp blades are made of advanced 3CR13 stainless steel for top efficiency and durability. Full tangs and extra-wide forged bolsters ensure maximum safety, stability and control. Precision-ground blades taper to create an extremely sharp, fine cutting edge to help you chop, dice and slice your favorite ingredients quickly and efficiently',
    image: 'knife-set-k.jpg',
    price: 89.99,
    quantity: 300,
    type: 'Kitchen'
  },
  {
    name: 'Kitchen Towels',
    description:
      'Pack of 12 and Size:6.1inchesx10.43inches.Material: Coral Velvet.Package:12 pack Microfiber Cleaning Cloths.Color:Pink,Green,Purple,Gray. Provides you an ample flour sack towels for all your household needs in daily life.',
    image: 'kitchen-towel-k.jpg',
    price: 29.99,
    quantity: 29,
    type: "Kitchen"
  },
  // {
  //   name: 'Kitchen Scale',
  //   description:
  //     'Portable food scale equipped with 4 high precision sensors, give you accurate weight all the time; 5kg/11lb capacity, 0.04oz/1g division, Perfect for baking, cooking, and postage.',
  //   image: 'alphabet-blocks.jpg',
  //   price: 28.99,
  //   quantity: 150
  // },
  {
    name: 'Toilet Papers',
    description:
      'Your employees and guests will notice that you care enough to provide the very best like stocking your washroom with Cottonelle Ultra Soft Bathroom Tissue. Each pure white sheet is cushioned for extra comfort, care and cleanliness. Plus, this toilet paper is FSC-certified, so you will know you are doing something smart for the environment and for your business. You will want to buy bulk toilet paper, so you are always prepared for your washroom traffic. Offering Cottonelle toilet paper in your business lets people know you care enough to provide the very best.',
    image: 'toilet-papers.jpg',
    price: 12.99,
    quantity: 100,
    type: "Bathroom"
  },
  {
    name: 'Diffuser Scents',
    description:
      'The fragrance of lavender makes you feel like you are in the French lavender field. The sweetness of the rose makes you smell the beauty of each day. The quietness of the herbs makes you enjoy the time quietly. Every reed diffuser is a journey full of novelty.',
    image: 'diffuser-scents.jpg',
    price: 15.99,
    quantity: 90,
    type: "Backyard"
  },
  {
    name: 'Perfumed Handwash',
    description:
      'We’re Love Beauty and Planet. We believe that #smallactsoflove can make the planet a little more beautiful, every single day. Gorgeous, game changing beauty for everyone is our thing, and this nature inspired moisturizing hand soap is no exception. We’re committed to sharing #smallactsoflove to make the world more beautiful, which is why this expertly perfumed liquid hand soap is infused with ethically sourced extract and oils. The liquid hand wash bottle is 100% recyclable and made from recycled plastic. Clean hands can be soft hands, too.',
    image: 'liquid-handwash.jpg',
    price: 9.99,
    quantity: 80,
    type: "Kitchen"
  },
  {
    name: 'Bathroom Mat',
    description:
      'Color&Geometry bath mat features polyester fiber fabric, a luxurious, fluffy and soft pile that soothes and relaxes tired feet as you walk out of the bathtub and shields toes from the cold floor. Stitched with reinforced seams for added strength. The upgraded microfiber surface ensures exceptional ventilation, softness and comfort with soft bristles that do not wear off easily.',
    image: 'bathroom-mats.jpg',
    price: 19.99,
    quantity: 60,
    type: "Bathroom"
  },
  {
    name: 'Backyard Grill',
    description:
      'Made of cast iron, high-temperature enamel.High temperature resistance，arrange charcoal on the fuel grate for either direct or indirect grilling. This portable charcoal grill is easy to assemble step by step. The grill stands on stable legs and can be easily moved thanks to the rollers. Heat control through ventilation- The rust-resistant, adjustable vent flap allows easy heat control for the grill. The round enameled coating bowl and lid store heat well so that they get even heat.',
    image: 'backyard-grill.jpg',
    price: 189.99,
    quantity: 50,
    type: "Out/misc"
  },
  {
    name: 'Gardening tools',
    description:
      'Relieve stress, enjoy the bright sunshine, and breathe in the fresh air while you spend time tending to your garden with our specially designed and curated set of garden tools.',
    image: 'garden-tools.jpg',
    price: 19.99,
    quantity: 200,
    type: "Out/misc"
  },
  {
    name: 'Garden Hose',
    description:
      'Retractable and expandable, our garden hose can expand quickly to 3X its original length when the water is on to make your tasks more efficient. When the water pressure is off, it automatically contracts for easy storage.',
    image: 'garden-hose.jpg',
    price: 79.99,
    quantity: 100,
    type: "Backyard"
  },
  {
    name: 'Backyard Swing',
    description:
      ' Steel 3-Seater porch swing with canopy provides perfect outdoor lounging experience. Suitable as an outdoor swing chair, garden swing, backyard swing, lawn swing, patio swing, deck swing, or a yard swing.  Featured adjustable weather-resistant canopy, the porch swing with stand blocks most harmful UV rays and sunlight for optimal comfort',
    image: 'backyard-swing.jpg',
    price: 299.99,
    quantity: 60,
    type: "Back"
  }
];
function Homepage() {
  // const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  // const product = data?.products || [];
  console.log(data);
  const BedroomData = data.filter(prod => prod.type === "Bedroom")
  const FamilyData = data.filter(prod => prod.type === "Family Room")
  const DiningData = data.filter(prod => prod.type === "Dining Room")
  const KitchenData = data.filter(prod => prod.type === "Kitchen")
  const BathroomData = data.filter(prod => prod.type === "Bathroom")
  const BackyardData = data.filter(prod => prod.type === "Backyard")
 console.log("result");
    return(
        <>
    <section>
        <ul className="d-flex list-unstyled justify-content-center p-4 bg-light">
        <li className="mx-4">Products up to 90% off</li>
        <li className="mx-4">Free shipping on orders $50+</li>
        <li className="mx-4">1 month Gurantee</li>
        </ul>
    </section>
      <section className='text-center bg-warning p-2'>
    <h1>Buy 50$ , Get 10$ FREE Products</h1>
  </section>
  <Categories homedata={KitchenData} category="Kitchen"/>
  <Categories homedata={FamilyData} category="Family Room"/>
  <Categories homedata={DiningData} category="Dining Room"/>
  <Categories homedata={BathroomData} category="Bathroom"/>
  <Categories homedata={BackyardData} category="Backyard"/>
  <Categories homedata={BedroomData} category="Bedroom"/>
  </>
    )
}
export default Homepage;