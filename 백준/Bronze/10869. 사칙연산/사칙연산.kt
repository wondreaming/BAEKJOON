fun main() {
    val input = readln().trim().split(" ").map{ it.toInt() }
    
    val A = input[0]
    val B = input[1]
    
    println(A + B)
    println(A - B)
    println(A * B)
    println(A / B)
    println(A % B)
}