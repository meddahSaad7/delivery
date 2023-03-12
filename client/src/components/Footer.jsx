import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responseve';
const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;

  ${mobile({
    overflowY: "scroll",
    position: "relative",
    height: "auto",
  })}
`;
const Top = styled.div`
  flex: 2.5;
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const TopLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 40px;
  align-items: flex-start;
  ${mobile({
    padding: "15px",
  })}
`;
const InputCover = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: end;
`;
const Input = styled.input`
  width: 100%;
  height: 30px;

  :focus::placeholder {
    position: absolute;
    top: 0;
    left: 0;
  }
  :focus {
    height: 40px;
  }
  outline: none;
  transition: all 1s ease;
  border: none;
  border-bottom: 1px solid gray;
  background-color: black;
  color: white;
`;
const Submit = styled.button`
  width: 167px;
  height: 48px;
  color: white;
  font-size: 16px;
  background-color: #a61e22;
  border: none;
  margin-top: 30px;
  border-radius: 5px;
`;
const Title = styled.h1``;
const TopRight = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({
    padding: "15px",
  })}
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 15px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
`;
const LinkOfice = styled.a`
  text-decoration: none;
  color: white;
  font-size: 15px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const TitleBlock = styled.h2``;
const Center = styled.div`
  flex: 1.5;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  ${mobile({
    width: "100%",
    flexDirection: "column",
  })}
`;
const CenterLeft = styled.div``;
const CenterRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${mobile({
    justifyContent: "flex-start",
    padding: "15px",
  })}
`;
const Bottom = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  padding-left: 40px;
  color: gray;
  ${mobile({
    flexDirection: "column",
    padding: "15px",
  })}
`;
const Icon = styled.div`
  margin-right: 10px;
`;
const Logo = styled.div`
  width: 300px;
  height: 100px;
  background-image: url("/images/no9ine.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Span2 = styled.span`
  color: white;
  margin-left: 10px;
`;
const Span = styled.span`
  color: #a61e22;
  margin-right: 5px;
`;
const Quicks = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${mobile({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  })}
`;
const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon1 = styled.div`
  margin-right: 10px;
`;
function Footer() {
  return (
    <Container>
      <Top>
        <TopLeft>
          <Title>
            Get action from our universe delivered straight to your inbox.
          </Title>
          <InputCover>
            <Input placeholder="Email Address *" />
          </InputCover>
          <Submit>Subscribe</Submit>
        </TopLeft>
        <TopRight>
          <Quicks style={{ display: "flex" }}>
            <Block>
              <TitleBlock>Quick Links</TitleBlock>
              <Link href="$">About</Link>
              <Link href="$">Services</Link>
              <Link href="$">Our Work</Link>
              <Link href="$">Careers</Link>
              <Link href="$">Insights</Link>
              <Link href="$">Contact Us</Link>
            </Block>
            <Block>
              <TitleBlock>Social Media</TitleBlock>
              <Link href="$">
                <Icon>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.07145 0.700195C4.45537 0.700195 0.678589 4.44186 0.678589 9.0502C0.678589 13.2169 3.75037 16.6752 7.76216 17.3002V11.4669H5.63037V9.0502H7.76216V7.20853C7.76216 5.11686 9.0127 3.96686 10.9347 3.96686C11.8495 3.96686 12.8063 4.1252 12.8063 4.1252V6.18353H11.7488C10.7081 6.18353 10.3807 6.8252 10.3807 7.48353V9.0502H12.7139L12.3363 11.4669H10.3807V17.3002C12.3585 16.9901 14.1594 15.9881 15.4583 14.4752C16.7573 12.9624 17.4688 11.0382 17.4643 9.0502C17.4643 4.44186 13.6875 0.700195 9.07145 0.700195V0.700195Z"
                      fill="white"
                    />
                  </svg>
                </Icon>
                Facebook
              </Link>
              <Link href="$">
                <Icon>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5805 4.92104C15.572 4.28989 15.453 3.66502 15.2288 3.07437C15.0344 2.57617 14.7375 2.12371 14.357 1.7459C13.9765 1.36809 13.5208 1.07325 13.019 0.880208C12.4318 0.661339 11.8114 0.542993 11.1843 0.530208C10.3769 0.494375 10.1209 0.484375 8.07141 0.484375C6.02187 0.484375 5.75918 0.484375 4.95766 0.530208C4.33085 0.543087 3.71077 0.661432 3.12382 0.880208C2.62198 1.07312 2.16621 1.36791 1.78569 1.74574C1.40517 2.12356 1.10827 2.57609 0.91398 3.07437C0.693107 3.65699 0.574173 4.2728 0.56232 4.89521C0.526231 5.69771 0.51532 5.95187 0.51532 7.98687C0.51532 10.0219 0.51532 10.2819 0.56232 11.0785C0.574909 11.7019 0.693248 12.3169 0.91398 12.901C1.10859 13.3992 1.40571 13.8515 1.78636 14.2292C2.16701 14.6068 2.62282 14.9015 3.12466 15.0944C3.71001 15.322 4.33019 15.4489 4.9585 15.4694C5.76673 15.5052 6.02271 15.516 8.07225 15.516C10.1218 15.516 10.3845 15.516 11.186 15.4694C11.8131 15.4571 12.4335 15.339 13.0207 15.1202C13.5223 14.9269 13.9779 14.632 14.3584 14.2542C14.7388 13.8765 15.0359 13.4241 15.2305 12.926C15.4512 12.3427 15.5696 11.7277 15.5822 11.1035C15.6183 10.3019 15.6292 10.0477 15.6292 8.01187C15.6275 5.97687 15.6275 5.71854 15.5805 4.92104ZM8.06637 11.8352C5.92284 11.8352 4.18636 10.111 4.18636 7.98271C4.18636 5.85437 5.92284 4.13021 8.06637 4.13021C9.09542 4.13021 10.0823 4.5361 10.81 5.25858C11.5376 5.98106 11.9464 6.96096 11.9464 7.98271C11.9464 9.00445 11.5376 9.98435 10.81 10.7068C10.0823 11.4293 9.09542 11.8352 8.06637 11.8352ZM12.1008 4.88604C11.982 4.88615 11.8643 4.86299 11.7545 4.81788C11.6446 4.77278 11.5449 4.70661 11.4608 4.62317C11.3768 4.53973 11.3101 4.44066 11.2647 4.33161C11.2193 4.22257 11.196 4.10571 11.1961 3.98771C11.1961 3.86979 11.2195 3.75303 11.2649 3.64409C11.3104 3.53515 11.377 3.43616 11.4609 3.35279C11.5449 3.26941 11.6446 3.20327 11.7543 3.15814C11.864 3.11302 11.9816 3.08979 12.1004 3.08979C12.2192 3.08979 12.3368 3.11302 12.4465 3.15814C12.5562 3.20327 12.6559 3.26941 12.7399 3.35279C12.8238 3.43616 12.8904 3.53515 12.9359 3.64409C12.9813 3.75303 13.0047 3.86979 13.0047 3.98771C13.0047 4.48437 12.6002 4.88604 12.1008 4.88604Z"
                      fill="white"
                    />
                  </svg>
                </Icon>
                Instagram
              </Link>
              <Link href="$">
                <Icon>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8433 2.11415C19.1425 2.42248 18.3896 2.63082 17.5982 2.72498C18.4148 2.23981 19.0257 1.4762 19.317 0.576649C18.5498 1.02914 17.7101 1.34765 16.8344 1.51832C16.2456 0.894037 15.4656 0.480255 14.6156 0.341211C13.7656 0.202168 12.8932 0.345642 12.1338 0.74936C11.3743 1.15308 10.7704 1.79445 10.4157 2.5739C10.061 3.35335 9.97539 4.22727 10.1722 5.05998C8.61755 4.98248 7.09671 4.58127 5.70837 3.8824C4.32002 3.18353 3.09518 2.20262 2.11335 1.00332C1.77763 1.57832 1.5846 2.24498 1.5846 2.95498C1.58422 3.59415 1.74275 4.22352 2.0461 4.78726C2.34946 5.351 2.78827 5.83168 3.3236 6.18665C2.70276 6.16703 2.09562 6.00047 1.55271 5.70082V5.75082C1.55264 6.64727 1.86495 7.51613 2.43663 8.20998C3.00831 8.90383 3.80415 9.37992 4.68912 9.55748C4.11318 9.71225 3.50936 9.73504 2.92326 9.62415C3.17294 10.3955 3.65931 11.07 4.31426 11.5533C4.96922 12.0365 5.75997 12.3043 6.57583 12.3191C5.19087 13.3987 3.48045 13.9842 1.71972 13.9816C1.40783 13.9817 1.0962 13.9636 0.786438 13.9275C2.57368 15.0685 4.65415 15.674 6.77894 15.6716C13.9716 15.6716 17.9037 9.75665 17.9037 4.62665C17.9037 4.45998 17.8995 4.29165 17.8919 4.12498C18.6568 3.57579 19.317 2.89573 19.8416 2.11665L19.8433 2.11415Z"
                      fill="white"
                    />
                  </svg>
                </Icon>
                Twitter
              </Link>
              <Link href="$" style={{ color: "#a61e22" }}>
                <Icon>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.839295 2.36516C0.839295 1.95894 1.00182 1.56936 1.29111 1.28211C1.58041 0.99487 1.97278 0.833498 2.3819 0.833498H17.7593C17.962 0.833169 18.1629 0.872551 18.3503 0.949387C18.5377 1.02622 18.708 1.13901 18.8514 1.28128C18.9949 1.42355 19.1086 1.59252 19.1862 1.77851C19.2638 1.96449 19.3037 2.16385 19.3036 2.36516V17.6335C19.3038 17.8348 19.264 18.0343 19.1866 18.2203C19.1091 18.4064 18.9954 18.5755 18.8521 18.7179C18.7087 18.8603 18.5385 18.9733 18.3511 19.0503C18.1637 19.1273 17.9629 19.1669 17.7601 19.1668H2.3819C2.17925 19.1668 1.97859 19.1272 1.79138 19.0502C1.60417 18.9731 1.43407 18.8602 1.29082 18.7179C1.14756 18.5756 1.03395 18.4067 0.956478 18.2207C0.879004 18.0348 0.839184 17.8355 0.839295 17.6343V2.36516ZM8.14779 7.8235H10.648V9.07016C11.0089 8.3535 11.9321 7.7085 13.3195 7.7085C15.9792 7.7085 16.6095 9.136 16.6095 11.7552V16.6068H13.9179V12.3518C13.9179 10.8602 13.557 10.0185 12.6405 10.0185C11.369 10.0185 10.8402 10.926 10.8402 12.3518V16.6068H8.14779V7.8235ZM3.53172 16.4927H6.22415V7.7085H3.53172V16.4918V16.4927ZM6.60938 4.8435C6.61446 5.07239 6.57344 5.29999 6.48873 5.51293C6.40402 5.72587 6.27732 5.91986 6.11608 6.08352C5.95483 6.24719 5.76229 6.37723 5.54975 6.466C5.3372 6.55478 5.10894 6.60051 4.87836 6.60051C4.64777 6.60051 4.41951 6.55478 4.20697 6.466C3.99442 6.37723 3.80188 6.24719 3.64064 6.08352C3.47939 5.91986 3.3527 5.72587 3.26799 5.51293C3.18327 5.29999 3.14225 5.07239 3.14733 4.8435C3.15729 4.39421 3.34405 3.96666 3.66759 3.6524C3.99114 3.33815 4.42575 3.16218 4.87836 3.16218C5.33096 3.16218 5.76558 3.33815 6.08912 3.6524C6.41267 3.96666 6.59942 4.39421 6.60938 4.8435Z"
                      fill="#A61E22"
                    />
                  </svg>
                </Icon>
                Linkedin
              </Link>
            </Block>
          </Quicks>

          <Block>
            <TitleBlock>Vist Us At</TitleBlock>
            <LinkOfice href="#">
              <Location>
                <Icon>
                  <svg
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.07944 2.63828C4.79702 -0.0792961 9.20308 -0.0792965 11.9207 2.63828C14.6382 5.35586 14.6382 9.76192 11.9207 12.4795L7.00005 17.4001L2.07944 12.4795C-0.638134 9.76192 -0.638134 5.35586 2.07944 2.63828ZM7.00005 9.54711C8.09811 9.54711 8.98827 8.65695 8.98827 7.55889C8.98827 6.46082 8.09811 5.57066 7.00005 5.57066C5.90198 5.57066 5.01182 6.46082 5.01182 7.55889C5.01182 8.65695 5.90198 9.54711 7.00005 9.54711Z"
                      fill="#A61E22"
                    />
                  </svg>
                </Icon>
                Office 901, Clover Bay Tower
              </Location>
              <br />
              ,Dubai, bUSINESS bAY Area
            </LinkOfice>
            <TitleBlock>Contact Details</TitleBlock>
            <Link href="#">
              <Icon1>
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.00291675 1.89811L6.99995 5.39663L13.9971 1.89807C13.9443 0.979008 13.1823 0.25 12.25 0.25H1.75C0.817703 0.25 0.0556804 0.979032 0.00291675 1.89811Z"
                    fill="white"
                  />
                  <path
                    d="M14 3.85317L6.99995 7.35319L0 3.85321V9C0 9.9665 0.783502 10.75 1.75 10.75H12.25C13.2165 10.75 14 9.9665 14 9V3.85317Z"
                    fill="white"
                  />
                </svg>
              </Icon1>
              info@no9ine.ae
            </Link>
            <Link href="#" style={{ color: "#a61e22" }}>
              <Icon>
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1.375C0 0.891751 0.391751 0.5 0.875 0.5H2.75876C3.1865 0.5 3.55154 0.809236 3.62186 1.23115L4.26876 5.11254C4.33191 5.49144 4.14055 5.86723 3.79697 6.03901L2.44235 6.71632C3.41911 9.14353 5.35647 11.0809 7.78368 12.0576L8.46099 10.703C8.63277 10.3595 9.00856 10.1681 9.38746 10.2312L13.2688 10.8781C13.6908 10.9485 14 11.3135 14 11.7412V13.625C14 14.1082 13.6082 14.5 13.125 14.5H11.375C5.09276 14.5 0 9.40724 0 3.125V1.375Z"
                    fill="#A61E22"
                  />
                </svg>
              </Icon>
              +971 54 339 9359
            </Link>
          </Block>
        </TopRight>
      </Top>
      <Center>
        <CenterLeft>
          <Logo />
        </CenterLeft>
        <CenterRight>
          <Span>We are NO9INE</Span> always a Ten
        </CenterRight>
      </Center>
      <Bottom>
        © 2022 No9ine Marketing — Digital Marketing Agency | All Rights Reserved
        <Span2>Privacy Policy</Span2>
      </Bottom>
    </Container>
  );
}

export default Footer