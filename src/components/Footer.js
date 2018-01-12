import React from "react";
import { Segment, Container, Divider, List, Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment inverted vertical style={{ margin: "5em 0em 0em" }}>
      <Container textAlign="center">
        <Divider inverted section />
        <List horizontal inverted divided link>
          <List.Item as="a" href="https://twitter.com/umair170">
            <Icon name="twitter" size="big" title="Twitter" />
          </List.Item>
          <List.Item
            as="a"
            href="https://www.linkedin.com/in/umair-ahmed-0222b377/"
          >
            <Icon name="linkedin" size="big" title="Linkedin" />
          </List.Item>
          <List.Item as="a" href="https://github.com/ahmedu007/FE-NC_News">
            <Icon name="github" size="big" title="GitHub" />
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
