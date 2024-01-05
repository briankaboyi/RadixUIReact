import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Form from '@radix-ui/react-form';
import { BellIcon, EnvelopeClosedIcon, FaceIcon, GitHubLogoIcon, LinkedInLogoIcon, PersonIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Flex, Grid, Text } from '@radix-ui/themes'
import React from 'react'

function Contacts() {
  return (
    <Flex className='contact-page' direction="column" gap="9">

      <Text as="h1">Lets Connect and Navigate Your <br /> Housing Goals</Text>
      <Flex className=" info-container" justify="between">
        <Grid>
          <Form.Root className="FormRoot" style={{
            background: "none",
            width: "450px",
            padding: "0px"
          }}>
            {/* ////////////// */}
            <Form.Field className="FormField first" name="firstName">
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <Form.Label className="FormLabel">First Name</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter your first name
                </Form.Message>
                <Form.Message className="FormMessage" match="typeMismatch">
                  Please provide a name
                </Form.Message>
              </div>
              <Flex className="input-div">
                <PersonIcon className='icon' />

                <Form.Control style={{ border: 'none' }} asChild>
                  <input className="Input name-input" type="text" placeholder='First Name' required />
                </Form.Control>
              </Flex>
            </Form.Field>
            {/* ///////////////////// */}
            <Form.Field className="FormField last" name="lastName">
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <Form.Label className="FormLabel">Last Name</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter your last name
                </Form.Message>
                <Form.Message className="FormMessage" match="typeMismatch">
                  Please provide a name
                </Form.Message>
              </div>

              <Flex className="input-div">
                <PersonIcon className='icon' />

                <Form.Control asChild>
                  <input className="Input name-input" type="text" placeholder='Last Name' required />
                </Form.Control>
              </Flex>
            </Form.Field>
            {/* ///////////////////// */}
            <Form.Field className="FormField email" name="email">
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <Form.Label className="FormLabel">Email</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter your email
                </Form.Message>
                <Form.Message className="FormMessage" match="typeMismatch">
                  Please provide a valid email
                </Form.Message>
              </div>

              <Flex className="input-div">
                <EnvelopeClosedIcon className='icon' />

                <Form.Control asChild>
                  <input className="Input" type="email" placeholder='someone@email.com' required />
                </Form.Control>
              </Flex>

            </Form.Field>
            {/* ///////////////////// */}
            <Form.Field className="FormField phone" name="phone">
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <Form.Label className="FormLabel">Phone Number</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter your phone number
                </Form.Message>
                <Form.Message className="FormMessage" match="typeMismatch">
                  Please provide a valid phone number
                </Form.Message>
              </div>

              <Flex className="input-div">
                <BellIcon className='icon' />

                <Form.Control asChild>
                  <input className="Input" type="tel" placeholder='+254 000 000 000' required />
                </Form.Control>
              </Flex>



            </Form.Field>
            {/* ///////////////////// */}
            <Form.Field className="FormField message" name="question">
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <Form.Label className="FormLabel">Message</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter a Message
                </Form.Message>
              </div>
              <Form.Control asChild>
                <textarea className="Textarea" placeholder='Tell us what we can help you with' required />
              </Form.Control>
            </Form.Field>
            {/* /////////////////////// */}
            <Form.Submit asChild>
              <button className="Button" style={{ marginTop: 10 }}>
                Post question
              </button>
            </Form.Submit>
            {/* /////////////////// */}
          </Form.Root>
        </Grid>


        <Flex className="details" direction="column" gap="6" >
          <Flex direction="column" >
            <Text size="3" weight="bold">Visit us</Text>
            <Text size="3">Come say hello at out office HQ</Text>
            <Text size="3">Spring Valley, Springette Office Park, Lower Kabete Road </Text>
          </Flex>


          <Flex direction="column">
            <Text size="3" weight="bold">Chat with us</Text>
            <Text size="3">Our friendly team is here to help</Text>
            <Text size="3">briankaboyi0@gmail.com</Text>
          </Flex>

          <Flex direction="column">
            <Text size="3" weight="bold">Call us</Text>
            <Text size="3">Mon-Fri from 8am to 5pm</Text>
          </Flex>

          <Flex gap="3">
            <TwitterLogoIcon />
            <LinkedInLogoIcon />
            <GitHubLogoIcon />
          </Flex>

        </Flex>
      </Flex>



    </ Flex>
  )
}

export default Contacts