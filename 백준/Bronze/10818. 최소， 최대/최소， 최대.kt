fun main() {
    val N = readln().toInt()
    val nums = readln().split(" ").map { it.toInt() }
    val max = nums.max()
    val min = nums.min()
    println("$min $max")
}