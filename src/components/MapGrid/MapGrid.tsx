import { Grid, GridItem } from '@chakra-ui/react';

interface Biomeprops{
  grid:Array<string>;
}
export const MapGrid = ({ grid } : Biomeprops) => (
  <Grid
    templateColumns="repeat(7,40px)"
    templateRows="repeat(7,40px)"
    color="torch.100"
    gap={0}
    border="2px"
    m="2em"
    p="2em 2em 2em "
    bg="torch.500"
  >
    { grid.map((chunk, index) => <GridItem key={index} bg={chunk} />)}
  </Grid>
);
