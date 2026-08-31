import Tags from "../components/Tags"
import Testy from "../components/testimonial/Testy"

export default function Testimonials() {
  const testimonies = [
        {
            name: 'Musediq Opeyemi',
            position: 'Founder FodluDev Movement',
            rating: 5,
            profilePicture: '/image-',
            comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae ipsa eum pariatur quaerat maiores illum fugiat, ad possimus iste suscipit. Esse sapiente, error officia quod asperiores, iste laborum sed alias voluptate aperiam animi quo suscipit saepe atque unde autem at neque, earum magni tempora et dolorem vero! Debitis, eos.'
        },
        {
            name: 'Elon Musk',
            position: 'Founder SpaceX, Space Station',
            rating: 5,
            profilePicture: '/image-',
            comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae ipsa eum pariatur quaerat maiores illum fugiat, ad possimus iste suscipit. Esse sapiente, error officia quod asperiores, iste laborum sed alias voluptate aperiam animi quo suscipit saepe atque unde autem at neque, earum magni tempora et dolorem vero! Debitis, eos.'
        },
        {
            name: 'Damilola Fadilulahi',
            position: 'Founder EV, Charger Station',
            rating: 5,
            profilePicture: '/image-',
            comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae ipsa eum pariatur quaerat maiores illum fugiat, ad possimus iste suscipit. Esse sapiente, error officia quod asperiores, iste laborum sed alias voluptate aperiam animi quo suscipit saepe atque unde autem at neque, earum magni tempora et dolorem vero! Debitis, eos.'
        },
        {
            name: 'Mark Zuckerberg',
            position: 'Founder Facebook, Instagram Station',
            rating: 5,
            profilePicture: '/image-',
            comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae ipsa eum pariatur quaerat maiores illum fugiat, ad possimus iste suscipit. Esse sapiente, error officia quod asperiores, iste laborum sed alias voluptate aperiam animi quo suscipit saepe atque unde autem at neque, earum magni tempora et dolorem vero! Debitis, eos.'
        },
        {
            name: 'Alexander Bell',
            position: 'Founder Telephone',
            rating: 5,
            profilePicture: '/image-',
            comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae ipsa eum pariatur quaerat maiores illum fugiat, ad possimus iste suscipit. Esse sapiente, error officia quod asperiores, iste laborum sed alias voluptate aperiam animi quo suscipit saepe atque unde autem at neque, earum magni tempora et dolorem vero! Debitis, eos.'
        },
        {
            name: 'Lesile Alexander',
            position: 'Founder EV, Charger Station',
            rating: 5,
            profilePicture: '/image-',
            comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae ipsa eum pariatur quaerat maiores illum fugiat, ad possimus iste suscipit. Esse sapiente, error officia quod asperiores, iste laborum sed alias voluptate aperiam animi quo suscipit saepe atque unde autem at neque, earum magni tempora et dolorem vero! Debitis, eos.'
        }
    ]

  return (
    <div className="testimonials-page">
      <h2>The Impact of My Work: <span>Client Testimonials</span></h2>
      <div className='testimony-items'>
        {testimonies.map((item, index) => <Testy key={index} item={item} />)}
      </div>
    </div>
  )
}
