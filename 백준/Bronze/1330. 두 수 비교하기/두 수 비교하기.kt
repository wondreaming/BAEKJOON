fun main(){
    val input = readln().split(" ").map{ it.toInt() }
    
    val A = input[0]
    val B = input[1]    
    
    if (A > B) {
        println(">")
    } else if (A < B) {
        println("<")
    } else if (A === B) {
        println("==")
    }
}