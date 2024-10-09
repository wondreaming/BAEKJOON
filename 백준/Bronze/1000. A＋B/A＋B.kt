fun main() {
    val input = readln() // non-nullable
    // val inputNullable = readLine()
    
    val arr = input.split(" ").map{ it.toInt() }
    
    val A: Int = arr[0]
    val B: Int = arr[1]
    
    val result: Int = A + B
    println(result)
}