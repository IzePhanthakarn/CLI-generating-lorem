import * as faker from "faker";
import * as commander from "commander";

const program = new commander.Command();

program
    .version("1.0.0")
    .description("CLI tool for generate Lorem Ipsum Text");

// command generate
program
    .command("generate")
    .alias("g")
    .description("Generate Lorem Ipsum Text")
    .option("-p, --paragraphs <number>", "Number of paragraphs to create", "1")
    .action((command) => {
        const { paragraphs } = command;

        // generate LoremIpsum
        for (let i = 0; i < parseInt(paragraphs); i++) {
            console.log(faker.lorem.paragraph(), "\n");
        }
    });

// run commander command
program.parse(process.argv);