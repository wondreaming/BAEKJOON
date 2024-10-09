fun main() {
    val input = readln().split(" ").map{ it.toInt() }
    
    val A: Int = input[0]
    val B: Int = input[1]
    
    val result: Int = A - B
    
    println(result)
}