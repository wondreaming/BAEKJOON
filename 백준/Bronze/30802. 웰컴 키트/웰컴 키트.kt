import java.io.BufferedReader
import java.io.InputStreamReader

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
fun main() {
    val reader = BufferedReader(InputStreamReader(System.`in`))
    val N = reader.readLine().toInt()
    val sizes = reader.readLine().split(" ").map { it.toInt() }
    val (T, P) = reader.readLine().split(" ").map { it.toInt() }

    val result = mutableListOf<Int>()

    for (size in sizes) {
        val res = when {
            size % T == 0 -> size / T
            else -> (size / T) + 1
        }
        result.add(res)
    }

    val pSet = N / P
    val pOne = N % P

    println(result.sum())
    println("$pSet $pOne")
}