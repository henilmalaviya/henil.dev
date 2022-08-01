import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

export default function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position='center' my='xl'>
      <ActionIcon onClick={() => toggleColorScheme()} size='lg'>
        {colorScheme === "dark" ? (
          <IconSun color='yellow' size={18} />
        ) : (
          <IconMoonStars color='gray' size={18} />
        )}
      </ActionIcon>
    </Group>
  );
}
