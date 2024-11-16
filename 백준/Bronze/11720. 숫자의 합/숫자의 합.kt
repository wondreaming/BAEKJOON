fun main() {
    val N = readln().toInt()
    val numString = readln()
    val result = mutableListOf<String>()
    for (i in 0..<N) {

        result.add(numString[i].toString())
    }
    val newNums = result.map { it.toInt() }
    println(newNums.sum())
}