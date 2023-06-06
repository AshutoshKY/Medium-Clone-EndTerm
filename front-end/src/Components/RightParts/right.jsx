import React from 'react'
import { HStack, Avatar, Heading ,Text} from '@chakra-ui/react'
import "./right.css";
import { BsDot } from 'react-icons/bs';

export default function Right() {
    return (
        // <div style={{border:"1px solid red", width:"416px", margin:"auto", marginRight:"0px", position:"relative"}}>
            <div className='right' >
            {/* <div>
                <button>Get unlimited access</button>
            </div> */}
            {/* <div>
                <input type="text" id='search' placeholder="Search" />
            </div> */}
            <div className='li-tag'>
                <BsDot color='green' size='60px'/>
                <span>MORE</span>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='s' name='Ashutosh Kumar'  src='https://bit.ly/broken-link' />
                    <Heading as='h5' fontWeight={600} size='xs'>Ashutosh Kumar</Heading>
                </HStack>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>My 2022 summer lists</Heading>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='s' name='Person 3' src='https://bit.ly/broken-link' />
                    <Heading as='h5' fontWeight={600} size='xs'>Person 2</Heading>
                </HStack>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>Can Reading Fiction Make You a Better Person?</Heading>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='s' name='Person 3' src='https://bit.ly/broken-link' />
                    <Heading fontWeight={600} as='h5' size='xs'>Person 3</Heading>
                </HStack>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>Hate NFTs? I have some bad news for you…</Heading>
                
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='s' name='Person 4' src='https://bit.ly/broken-link' />
                    <Heading as='h5' fontWeight={600} size='xs'>Person 4</Heading>
                </HStack>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>We Are Still Good</Heading>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='s' name='Person 5' src='https://bit.ly/broken-link' />
                    <Heading as='h5' fontWeight={600} size='xs'>Person 5</Heading>
                </HStack>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>Be the Person You Are on Vacation</Heading>
            {/* <Text fontSize='xs' mt={4} color="green.500" cursor="pointer"> See the full list</Text> */}
            </div>
            <div className='topic'>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>Reading list</Heading>
                <Text fontSize='sm' mt={4} color="gray.600" cursor="pointer"> Click the  on any story to easily add it to your reading list or a custom list that you can share.</Text>
            </div>
        </div>
        // </div>
    )
}
