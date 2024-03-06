package main

import (
	"fmt"
	"io/fs"
	"os"
	"strings"
)

func main() {
	files, err := os.ReadDir("./assets/svgs")

	if err != nil {
		fmt.Println("Error reading directory:", err)
		return
	}
	// rm ./assets/iconsComponents folder
	err = os.RemoveAll("./assets/iconsComponents")
	if err != nil {
		fmt.Println("Error removing directory:", err)
		return
	}

	var iconNames []string
	for _, file := range files {
		if file.IsDir() {
			continue
		}
		if strings.HasSuffix(file.Name(), ".svg") {
			name := strings.TrimSuffix(file.Name(), ".svg")
			iconNames = append(iconNames, fmt.Sprintf(`"%s"`, name))
		}
	}

	typeContent := fmt.Sprintf("export type IconType = %s;\n", strings.Join(iconNames, " | "))
	arrayContent := fmt.Sprintf("export const IconsArray = [%s];\n", strings.Join(iconNames, ", "))

	err = os.WriteFile("./types/IconType.ts", []byte(typeContent), fs.ModePerm)
	if err != nil {
		fmt.Println("Error writing to file:", err)
		return
	}
	err = os.WriteFile("./types/IconsArray.ts", []byte(arrayContent), fs.ModePerm)
	if err != nil {
		fmt.Println("Error writing to file:", err)
		return
	}

	fmt.Println("Icons types generated successfully!")
}
