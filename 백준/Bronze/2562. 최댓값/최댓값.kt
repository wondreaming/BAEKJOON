fun main() {
    val nums = mutableListOf<Int>()
    for (i in 0..8) {
        val num = readln().toInt()
        nums.add(num)
    }
    println(nums.max())
    println(nums.indexOf(nums.max()) + 1)
}