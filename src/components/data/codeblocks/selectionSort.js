export default {
	c: 
`int main(void) {
    puts("Hello World!");
    return EXIT_SUCCESS;
}`,
	cpp: `#include <iostream.h>
main() {
  cout << "Hello World!" << endl;
  return 0;
}`,
	java: `class HelloWorld {
  static public void main( String args[] ) {
    System.out.println( "Hello World!" );
  }
}`,
	javascript: `var sys = require("sys");
sys.puts("Hello World");
`,
	python: `# Hello world in Python 2
print "Hello World"

# Hello world in Python 3 (aka Python 3000)
print("Hello World")
`,
};
