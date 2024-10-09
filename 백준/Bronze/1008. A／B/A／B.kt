fun main(){
    val input = readln().split(" ").map{ it.toInt() }
    
    val A = input[0].toDouble()
    val B = input[1].toDouble()
    
    val result = A / B
    println(result)
}