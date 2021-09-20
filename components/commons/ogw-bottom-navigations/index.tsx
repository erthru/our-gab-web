import { Flex } from "@chakra-ui/layout";
import OGWBottomNavigation from "./ogw-bottom-navigation";

type OGWBottomNavigationItem = {
    title: string;
    icon: any;
    to: string;
};

type Props = {
    items: OGWBottomNavigationItem[];
    currentActivePosition: number;
    onItemSelected: (position: number) => void;
};

const OGWBottomNavigations = (props: Props) => (
    <Flex bg="red.400" h="52px" w="full" py="8px" justifyContent="center">
        {props.items.map((item, i) => (
            <OGWBottomNavigation
                title={item.title}
                icon={item.icon}
                to={item.to}
                isActive={props.currentActivePosition === i}
                key={item.title}
                onClick={() => props.onItemSelected(i)}
            />
        ))}
    </Flex>
);

export default OGWBottomNavigations;
